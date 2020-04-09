function dictionaries(){
    //定义属性
    this.items = {};
    //构造方法
    //set 添加数据
    dictionaries.prototype.set = function(key,value){
        this.items[key] = value;
        return true;

    }
    //判断是否存在某个key值；
    dictionaries.prototype.has = function(key){
        return this.items.hasOwnProperty(key);
    }
    //删除方法
    dictionaries.prototype.remove = function (key) {
        if(!this.has(key))return false;
        delete this.items[key];
        return true;
    }
    // 根据key值获取value;
    dictionaries.prototype.get = function(key) {
        return this.has(key) ? this.items[key] : undefined;
    }
    //获取所有keys;
    dictionaries.prototype.keys = function (key) {
        return Object.keys(this.items);
    }
    //获取所有的value;
    dictionaries.prototype.values = function (value) {
        return Object.values(this.items)
    }
    //获取数据的长度；
    dictionaries.prototype.size = function(){
        return Object.keys(this.items).length;
    }
    //将数据清空；
    dictionaries.prototype.clear = function(){
        return this.items = {};
    }
}