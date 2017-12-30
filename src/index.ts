import { Array1D, Array2D, NDArrayMathGPU } from 'deeplearn'

const math = new NDArrayMathGPU()

const matrixShape = [2, 3]  // 2 rows, 3 columns.
const matrix = Array2D.new(matrixShape, [10, 20, 30, 40, 50, 60])
const vector = Array1D.new([0, 1, 2])
const result = math.matrixTimesVector(matrix, vector)



result.data().then(function (result) {
  console.log(result)
})
