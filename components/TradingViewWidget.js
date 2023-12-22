// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react'

function TradingViewWidget() {
  const container = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
        {
          "symbols": [
            [
              "OKX:SOLUSDC|1M"
            ]
          ],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "bars",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineType": 0,
          "dateRanges": [
            "1m|30"
          ],
          "upColor": "#22ab94",
          "downColor": "#f7525f"
        }`
    container.current.appendChild(script)
  }, [])

  return (
    <div className='mt-[30px] tradingview-widget-container' ref={container}>
      <div className='tradingview-widget-container__widget'></div>
      <div className='tradingview-widget-copyright'></div>
    </div>
  )
}

export default memo(TradingViewWidget)
