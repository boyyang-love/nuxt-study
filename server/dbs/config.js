export default {
    dbs:'mogodb://127.0.0.1:27017/student',
    redis: {
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    smtp: {
        get host(){
            return 'smt.qq.com'
        },
        get user(){
            return '1761617270@qq.com'
        },
        get pass(){
            return 'auvpdinbstbodedf'
        },
        get code(){
            return ()=>{
                Math.random().toString(16).slice(2,6).toUpperCase()
            }
        },
        get expire(){
            return ()=>{
                return new Date().getTime()+60*60*1000
            }
        }
    }

}