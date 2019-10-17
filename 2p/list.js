class nodo{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class lista{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertHead(nodo){
        if(this.head != null){
            nodo.next = this.head
            this.head = nodo;
        }
        else{
            this.head = nodo;
            if(this.tail == null) this.tail = nodo;
        } 
        this.size ++;
    }

    insertTail(nodo){
        if(this.tail != null){
            (this.tail).next = nodo;
            this.tail = nodo;
        }
        else{
            this.tail = nodo;
            if(this.head == null) this.tail = nodo;
        } 
        this.size ++;
    }

    deleteHead(){
        let temp = this.head.next;
        this.head.next = null
        this.head = temp;
        this.size --;
    }

    deleteTail(){
        let temp = this.head;
        for(let c = this.size ; c > 2 ;c--){
            temp = (temp).next;
            
        }
        this.tail = temp;
        this.size --;
    }

    size(){
        return this.size;
    }

    Stringer(x){
        if(x.next != null) return (x.data + ", " + this.Stringer(x.next));
        else return x.data
        
    }

    toString(){
        return (this.head.data + ", " + this.Stringer(this.head.next));
    }
}


let nodo1 = new nodo("nodo1");
let nodo2 = new nodo("nodo2");
let nodo3 = new nodo("nodo3");
let nodo4 = new nodo("nodo4");
let nodo5 = new nodo("nodo5");
let nodo6 = new nodo("nodo6");
let lista1 = new lista;
lista1.insertHead(nodo5)
lista1.insertHead(nodo4)
lista1.insertHead(nodo3)
lista1.insertHead(nodo2)
lista1.insertHead(nodo1)
lista1.insertTail(nodo6)