//@version=5
strategy("max min MA strategy", overlay=false, initial_capital=100000, default_qty_type=strategy.percent_of_equity, default_qty_value=100)

i_tf = input.timeframe("D", "Timeframe")
i_src = input(close, title='Source')
// i_ma1 = input.int(title="fast MA length", defval=25, step=1, group="Strategy Parameters", tooltip="the shorter period, faster MA")

s = request.security("NSE:CUMMINSIND",i_tf, i_src)

// ma1 = ta.sma(s, i_ma1)
plot(s, color=color.red,linewidth=20)