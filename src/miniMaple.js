class MiniMaple{

    constructor(){
        this.maple = new String();
    }

    set(polynom){
        this.maple = polynom;
    }

    differentiation(){
        let a = this.maple;
        let fields = a.split(/[+-]|, /);
        console.log(fields)//составные части многочлена
        let fields_2 = new Array();
        let fields_3 = new Array();
        let znaki = new Array();
        let products = new Array();
        let last_element = fields.pop()
        for (let i=0; i<fields.length; i++){
            fields_2.push(fields[i].split(last_element));
        }
        for (let i=0; i<a.length; i++){
            if ((a[i]=="-")|(a[i]=="+")){
                znaki.push(a[i]);
            }
        }
        console.log(znaki)
        for (let i=0; i<fields.length; i++){
            if(fields_2[i].length == 1){
                fields_2[i][0]='0';
            }
        }

        console.log(fields_2)
        for (let i=0; i<fields_2.length; i++){
            fields_2[i][0]=fields_2[i][0].split("*");
        }
        let product =1;
        console.log(fields_2)//составные части: коэфиц-ты и степень
        for (let i=0; i<fields_2.length; i++){//записываем степень икса в множители и меняем её
            if(fields_2[i].length==2){
                if (fields_2[i][1][0] == "^"){
                    let power = fields_2[i][1].substring(1);
                    fields_2[i][0].push(power)
                    fields_2[i][1]="^";
                    fields_2[i][1]+=(parseInt(power)-1).toString();
                }
                if (fields_2[i][1][1] == "0"){
                    fields_2[i][1]="";
                }
            }
        }
        console.log(fields_2)

        for (let i=0; i<fields_2.length; i++){
            for (let j=0; j<fields_2[i][0].length; j++){
                if(isNaN(parseInt(fields_2[i][0][j])) == false){
                    product*=parseInt(fields_2[i][0][j]);
                }
            }
            products.push(product);
            console.log(product)
            product =1;
        }

        //////////////////////////////////////////////////
        for (let i=0; i<fields_2.length; i++){
            for (let j=0; j<fields_2[i][0].length; j++){
                if(isNaN(parseInt(fields_2[i][0][j])) == false){
                    fields_2[i][0].splice(j,1);
                }
            }
        }

        for (let i=0; i<fields_2.length; i++){
            for (let j=0; j<fields_2[i][0].length; j++){
                if (fields_2[i][0][j]===""){
                    fields_2[i][0].splice(j,1);
                }
            }
        }
        console.log(fields_2)
        //////////////////////////////////////////////////
        for (let i=0; i<fields_2.length; i++){
            fields_2[i][0].unshift((products[i].toString()))
        }
        console.log(fields_2)
        fields_3 = fields_2;

        for (let i=0; i<fields_3.length; i++){
            let mnogitel = new String();
            for (let j=0; j<fields_3[i][0].length; j++){
                mnogitel+=fields_3[i][0][j];
                if(fields_3[i][1]!==""){
                    mnogitel+="*";
            }
            else {
                if(j!==fields_3[i][0].length-1){
                     mnogitel+="*";
                }
            }
            }
            fields_3[i][0]=mnogitel;
            mnogitel = ""
            if ((fields_3[i].length==2)&&(fields_3[i][1] !=='')){
                fields_3[i][0]+=last_element
            }
        }
        console.log(fields_3)

        for (let i=0; i<fields_3.length; i++){
            if ((fields_3[i][1]=="^1")&&(fields_3[i].length==2)){
                fields_3[i][1]="";
            }
        }
        console.log(fields_3)


        if(a[0]=="-"){
            fields_3[0]=znaki[0]+fields_3[0][0]
        }
        else{
            if(fields_3[0].length == 2){
                fields_3[0]=fields_3[0][0]+fields_3[0][1];
            }
            else{
                fields_3[0]=fields_3[0][0]
                
            }
        }
        for (let i=1; i<fields_3.length; i++){
            if(fields_3[i].length == 2){
                fields_3[i]=znaki[i-1]+fields_3[i][0]+fields_3[i][1];
            }
            else{
                fields_3[i]=znaki[i-1]+fields_3[i][0]
            }
        }
        console.log(fields_3)
        //////////////////////////////
        let diff_polynom = new String();
        for (let i=0; i<fields_3.length; i++){
            let flag=0;
            for (let j=0; j<fields_3[i].length; j++){
                if((fields_3[i][j]=="0")&&(fields_3[i][j+1]=="*")){
                    flag=1;
                }
            }
            if (flag==0){
                diff_polynom+=fields_3[i];
            }
            flag=0;
        }
        if (diff_polynom[0] =='+'){
            diff_polynom=diff_polynom.substring(1);
        }
        if(diff_polynom == ''){
            diff_polynom="0"
        }
        console.log(diff_polynom)
        return diff_polynom;
    }
}

export {MiniMaple}