//Created By VIPIN VIJAYAKUMAR 
//@version=5
indicator(title="NSE ANALYSIS IND", overlay=false)
nse = request.security("NIFTY", 'D',close)
fast_length = 12
slow_length = 26
signal_length = 9
col_grow_above =#26A69A
col_fall_above =#B2DFDB
col_grow_below =#FFCDD2
col_fall_below =#FF5252
fast_ma = ta.ema(nse, fast_length) 
slow_ma = ta.ema(nse,slow_length) 
macd = fast_ma - slow_ma
signal = ta.sma(macd, signal_length)
// hline(0, "Zero Line", color=color.new(#787B86, 50))
hist = macd - signal
// plot(hist, title="Histogram", style=plot.style_columns, color=(hist>=0 ? (hist[1] < hist ? col_grow_above : col_fall_above) : col_fall_below))
// plot(macd, color = #2962FF)
// plot(signal,color=#FF6D00)
score = hist>=0 ? (hist[1] < hist ? 90 : 50):(hist[1] < hist ? -90 : -50)
// plot(score, title="Nifty Strength")

stock = request.security(syminfo.tickerid, '5',close)
fast_ma_stock = ta.ema(stock, fast_length) 
slow_ma_stock = ta.ema(stock,slow_length) 
macd_stock = fast_ma_stock - slow_ma_stock
signal_stock = ta.sma(macd_stock, signal_length)
hist_stock = macd_stock - signal_stock
// hline(0, "Zero Line", color=color.new(#787B86, 50))
// plot(hist_stock, title="Histogram", style=plot.style_columns, color=(hist_stock>=0 ? (hist_stock[1] < hist_stock ? col_grow_above : col_fall_above) : col_fall_below))
// plot(macd_stock, color = #2962FF)
// plot(signal_stock,color=#FF6D00)
score_stock = hist_stock>=0 ? (hist_stock[1] < hist_stock ? 90 : 50):(hist_stock[1] < hist_stock ? -90 : -50)
plot(score_stock, title="Nifty Strength")