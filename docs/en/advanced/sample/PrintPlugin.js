import Leivii from 'leivii'
import { Print, checkPrint } from 'geek-print-config'

Leivii.API.registPlugin('print', {
  @Leivii.API.doc('获取打印机列表')
  getPrinterList() {
    return new Promise(resolve => {
      checkPrint.getCLodop().then(_ => {
        let PRINTER_COUNT = LODOP.GET_PRINTER_COUNT()
        let printerList = []
        for (let i = 0; i < PRINTER_COUNT; i++) {
          let pitName = LODOP.GET_PRINTER_NAME(i)
          printerList.push({ label: pitName, value: i.toString() })
        }
        resolve(printerList)
      })
    })
  },
  @Leivii.API.doc('打印', { label: '模板列表', type: Array }, { label: '打印参数', type: Object, clazz: 'ParamPicker' })
  print(tempate, params) {
    return new Promise(resolve => {
      Print(tempate, params).finally(data => {
        console.log("打印完毕")
        resolve(data)
      })
    })
  }
}, '打印')