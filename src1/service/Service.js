import axios from "axios";

const CONTENT_API_URL="http://localhost:9090/content/home";
const HTML_API_URL="http://localhost:9090/api/getHtml";
const CSS_API_URL="http://localhost:9090/api/getCss";
const JAVASCRIPT_API_URL="http://localhost:9090/api/getVanila";
const REACT_API_URL="http://localhost:9090/api/getReact";
const NODE_API_URL="http://localhost:9090/api/getNode";
const EXPRESS_API_URL="http://localhost:9090/api/getExpress";
const REACTNATIVE_API_URL="http://localhost:9090/api/getReactNative";
const JAVA_API_URL="http://localhost:9090/api/getCoreJava";
const ADVJAVA_API_URL="http://localhost:9090/api/getAdvJava";
const SERVLET_API_URL="http://localhost:9090/api/getServlet";
const SPRING_API_URL="http://localhost:9090/api/getSpring";
const SPRINGBOOT_API_URL="http://localhost:9090/api/getSpringBoot";
const HIBERNATE_API_URL="http://localhost:9090/api/getHibernate";
const ANDROID_API_URL="http://localhost:9090/api/getAndroid";
const PYTHON_API_URL="http://localhost:9090/api/getPython";
const C_API_URL="http://localhost:9090/api/getC";
const CPP_API_URL="http://localhost:9090/api/getCpp";
const SQL_API_URL="http://localhost:9090/api/getSql";

class Service{
    getHome(){
        return axios.get(CONTENT_API_URL);
    }
    getHtml(){
        return axios.get(HTML_API_URL);
    }
    getCss(){
        return axios.get(CSS_API_URL);
    }
    getJavaScript(){
        return axios.get(JAVASCRIPT_API_URL);
    }
    getReact(){
        return axios.get(REACT_API_URL);
    }
    getNode(){
        return axios.get(NODE_API_URL);
    }
    getExpress(){
        return axios.get(EXPRESS_API_URL);
    }
    getReactNative(){
        return axios.get(REACTNATIVE_API_URL);
    }
    getJava(){
        return axios.get(JAVA_API_URL);
    }
    getAdvJava(){
        return axios.get(ADVJAVA_API_URL);
    }
    getServlet(){
        return axios.get(SERVLET_API_URL);
    }
    getSpring(){
        return axios.get(SPRING_API_URL);
    }
    getSpringBoot(){
        return axios.get(SPRINGBOOT_API_URL);
    }
    getHibernate(){
        return axios.get(HIBERNATE_API_URL);
    }
    getAndroid(){
        return axios.get(ANDROID_API_URL);
    }
    getPython(){
        return axios.get(PYTHON_API_URL);
    }
    getC(){
        return axios.get(C_API_URL);
    }
    getCpp(){
        return axios.get(CPP_API_URL);
    }
    getSql(){
        return axios.get(SQL_API_URL);
    }
}
export default new Service();