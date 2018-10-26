const {rpc, React, i18n} = Serverboards
const plugin_id="serverboards.cloud"
const component_id="node_list"
import List from './containers/list'
// import View from './components/list'

Serverboards.add_screen(`${plugin_id}/${component_id}`, List, {react: true})
