$(document).ready(
    function() {
        var example = 1;
        var example1 = 2;
        var example2 = 3;
        var example3 = 4;
        var lol = 10;
        var massBind = [example1,example2,example3];
        var Tag = new tag();
        Tag.create("int");
        Tag.bind("lol", int);
        var interger = Tag.retrieve(int);
        console.log(interger);
        Tag.edit(int, 4);
        console.log(lol);
        Tag.unbindAll(int);
})