function testSimpleCache(){
  const assert = require("myassert");
  if(typeof HashWrapper === "undefined") HashWrapper = require("HashWrapper").HashWrapper;
  if(typeof SimpleCache === "undefined") SimpleCache = require("SimpleCache").SimpleCache;
  var simpleCache = new SimpleCache();
  const hw1 = new HashWrapper(simpleCache, 1000);
  const hw2 = new HashWrapper(simpleCache, 1000);
  hw1.put("abc", 1);
  hw1.commit();
  assert.strictEqual(hw1.get("abc"), 1);
  assert.strictEqual(hw2.get("abc"), 1);
}

if(typeof process !== "undefined"){
  testSimpleCache();
}
