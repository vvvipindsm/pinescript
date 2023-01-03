//@version=5
strategy("My Macd", overlay=true)
fastLength = input(12)
var x = 1
var score = ""
var status = 0
var dir = "BUY"
slowlength = input(26)
MACDLength = input(9)
MACD = ta.ema(close, fastLength) - ta.ema(close, slowlength)
aMACD = ta.ema(MACD, MACDLength)
delta = MACD - aMACD
nse = request.security(syminfo.tickerid, '1D',close)
fast_length = 12
slow_length = 26
signal_length = 9

fast_ma = ta.ema(nse, fast_length) 
slow_ma = ta.ema(nse,slow_length) 
macd = fast_ma - slow_ma
signal = ta.ema(macd, signal_length)

hist = macd - signal
plot(hist, title="Histogram", style=plot.style_columns, color=(hist>=0 ? (hist[1] < hist ? color.green : color.green) : color.red))
plot(macd, color = #2962FF)
plot(signal,color=#FF6D00)
score := hist>=0 ? (hist[1] < hist ? "buy" : "buy"):(hist[1] < hist ? "sale" : "sale")

// label= label.new(bar_index,high,text= str.tostring(close),color=color.white,textcolor= color.green,style =  label.style_none,yloc = yloc.abovebar)

if (ta.crossover(delta, .8))
    alert("BUY " + str.tostring(syminfo.tickerid)+" "+str.tostring(close), alert.freq_once_per_bar)

if (ta.crossunder(delta,.3) and score =="sell")
    alert("SELL "+str.tostring(syminfo.tickerid)+" "+str.tostring(close), alert.freq_once_per_bar) 
