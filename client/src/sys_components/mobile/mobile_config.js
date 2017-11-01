import MContainer from './mcontainer/mcontainer'
import MContainerEditor from './mcontainer/mcontainer_editor'
import MContainerConfig from  './mcontainer/mcontainer_config'

import MBanner from './mbanner/mbanner'
import MBannerEditor from './mbanner/mbanner_editor'
import MBannerConfig from  './mbanner/mbanner_config'

/**
 * 基础组件描述对象
 * 	comObj 组件对象
 * 	desc 组件简介信息，用于组件加载后列表显示
 * 		tag 自定义标签命名
 * 		label 组件展示名
 * 		icon 组件展示icon
 * 		level 组件级别，分为3级：
 * 			2 顶级组件 可容纳任何2级以下组件
 * 			1 次级组件 可容纳任何1级以下组件
 * 			0 元素组件 不可容纳其它组件
 * @type {Array}
 */
const ui_desc = [{
	comKey: 'mContainer',
	comObj: MContainer,
	comEditorObj: MContainerEditor,
	desc: {
		label: '页面',
		icon: '',
		level: 2
	},
	data () {
		return MContainerConfig.getData()
	}

}, {
	comKey: 'mBanner',
	comObj: MBanner,
	comEditorObj: MBannerEditor,
	desc: {
		label: '通栏图',
		icon: 'fa-columns',
		level: 1
	},
	data () {
		return MBannerConfig.getData()
	}

}];
export const SYS_M_UI_DESC = ui_desc;