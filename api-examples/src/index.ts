import * as tf from '@tensorflow/tfjs';

const tf_input = ()=>{
// Defines a simple logistic regression model with 32 dimensional input
// and 3 dimensional output.
  const x = tf.input({shape: [32]});
  const y = tf.layers.dense({units: 3, activation: 'softmax'}).apply(x);
  const model = tf.model({inputs: x, outputs: y});
  model.predict(tf.ones([2, 32])).print();
}

tf_input()
