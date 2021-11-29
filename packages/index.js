/**
 * @author kyrie
 * Date: 17/11/9
 */
import WAlert from './alert/index'
import IButton from './button/index.js'
import WCol from './col/index'
import WLimitTextArea from './limit-textarea/index'
import WLoadingBar from './loading-bar/index'
import MetaInfo from './meta-info/index'
import WRow from './row/index'
import WShowMore from './show-more/index'
import Skeleton from './skeleton/index'
import WTag from './tag/index'

const components = [
  IButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  WAlert,
  Skeleton
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  IButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  MetaInfo,
  WAlert,
  WLoadingBar,
  Skeleton
}
