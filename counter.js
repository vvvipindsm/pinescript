//@version=5

indicator("Tesing", overlay=false)
count = 0
isGreen = close >= open
count := count + 3

plot(close*.2, title="Yearly S2")
// plotshape(close, color=color.red,style=shape.labeldown)