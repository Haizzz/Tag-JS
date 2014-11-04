$(document).ready(
    function() {
        var tag = function() {
            this.create = function(name) {
                window[name] = [];
                console.log("%c[tag.js] created a tag with name == " + name, "color: #3498db");
            }
            this.unbindAll = function(tagName) {
                tagName = [];
                console.log("%c[tag.js] unbinded all elements of tag", "color: #e74c3c");
            }
            this.bindAll = function(varArray, tagName) {
                for(i=0;i<varArray.length;i++) {
                    tagName.push(varArray[i]);
                }
                console.log("%c[tag.js] binded all variables to tag", "color: #2ecc71");
            }
            this.bind = function(varName, tagName) {
                tagName.push(varName);
                console.log("%c[tag.js] element binded to tag", "color: #27ae60");
            }
            this.unbind = function(varName, tagName) {
                tagName.splice(tagName.indexOf(varName), 1);
                console.log("%c[tag.js] unbinded element with name == " + varName, "color: #c0392b");
            }
            this.retrieve = function(tagName) {
                console.log("%c[tag.js] retrieved elements in tag as an array", "color: #f1c40f");
                return tagName
            }
            this.edit = function(tagName, value) {
                for(i=0;i<tagName.length;i++) {
                    eval(JSON.stringify(tagName[i] + " = " + value + ";"));
                }
                console.log("%c[tag.js] change elements of tag to value == " + value, "color: #e67e22");
            }
        }
        window.tag = tag;
})