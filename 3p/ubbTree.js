// Node class 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class 
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {

        if (node === null)
            return null;

        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    getRootNode() {
        return this.root;
    }
}
var B1 = new BinaryTree(); 
  
B1.insert(1);
B1.insert(2);
B1.insert(3);
B1.insert(4);
B1.insert(5);
B1.insert(6);
B1.insert(7);
B1.insert(8);
B1.insert(9);
B1.insert(10);  
//           8 
//         /  \ 
//         4    9
//       /  \   /  
//      2    5  10   
//     / \  / \  
//    1   3 6  7 
var root = B1.getRootNode();         
B1.inorder(root); 
B1.remove(4); 
var root = B1.getRootNode();       
B1.inorder(root);
console.log(root);       


