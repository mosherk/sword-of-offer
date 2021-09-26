function replaceSpace( s ) {
    let str=""
    for(let i=0; i<s.length;i++){
        s.charAt(i)!==" " ? str+=s.charAt(i) : str+="%20"
        //方法二：
        //return s.split(' ').join('%20');
        //方法三：
        //let regx = new RegExp(' ','g');
        //return s.replace(regx,'%20');
        //方法四：
        //let arr = [...s].map(item => {
            //return item === ' ' ? '%20' : item;
        //});
            //return arr.join('');
        }
    return str
}
