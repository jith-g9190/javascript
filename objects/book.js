class BookLibrary {

    books = {
        "randamoozham": { book_name: "randamoozham", price: 470, author: "mt vasudhevan", avl_copies: 100, sold_copies: 100 },

        "aadujeevitha": { book_name: "aadujeevitham", price: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },
        "rainrising": { book_name: "rainrising", price: 500, author: "nirupama", avl_copies: 200, sold_copies: 140 },
        "halfgirlfirend": { book_name: "halfgirlfriend", price: 550, author: "chethan bagath", avl_copies: 150, sold_copies: 140 },

    }

    // findBook(book_name){

    // }
    // orderBySold(){

    // }

    findbook(book_name){
        this.book_name=book_name;
        if(book_name in this.books){
            console.log("book available",this.books[book_name]);
        }
        else{
            console.log("book not available");
        }
    }

}

var obj =new BookLibrary()
obj.findbook("randamoozham")
