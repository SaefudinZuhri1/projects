#import tensorflow as tf

#x = tf.constant([[1., 2., 3.],
#                 [4., 5., 6.]])

#print(x)
#print(x.shape)
#print(x.dtype)

import tensorflow as tf

mnist = tf.keras.datasets.mnist

(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0