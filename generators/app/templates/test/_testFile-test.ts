import * as tape from 'tape';
import <%= pluginFnName %> from '../src/<%= pluginFnName %>';


tape("<%= pluginFnName %>() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(<%= pluginFnName %>(), 42);
  test.end();
});