/* SORT         Ejercicio 1: Ordenar usando el metodo burbuja */
array = [9,2,6,1,4,3,8,7];    
const ordenar = (arr) =>{
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let aux = arr[j]
                arr[j] = arr[i]
                arr[i] = aux
            }
        }
    }
}
ordenar(array)
console.log(array)