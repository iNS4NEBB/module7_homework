function check() {

    const obj = {
      '': '',
      string: 'string',
      obj1: { obj2: 'obj2' },
    }
    
    const checkProp = (prop, obj) => {
      if (prop in obj) return true
      else return false
    }
    
    console.log(checkProp('string', obj))
    console.log(checkProp('str', obj))
    };
    check()