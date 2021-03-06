var apiURL = {
    baseurl: 'http://v3.wufazhuce.com:8000/api',
    homePage: '/hp/bymonth/',
    readingCarousel: '/reading/carousel',
    readingIndex: '/reading/index/',
    essay: '/essay/',
    serialcontent: '/serialcontent/',
    question: '/question/',
    carouselList: '/reading/carousel/',
    movieList: '/movie/list/',
    movieDetail: '/movie/detail/'

};
function getData(stream,url, callback) {
    stream.sendHttp({
        method: 'GET',
        url: url
    }, function (ret) {
        var retdata = JSON.parse(ret);
        callback(retdata);
    });
}
exports.getHome = function (stream,dateStr, callback) {
    getData(stream,apiURL.baseurl + apiURL.homePage + dateStr, callback);
};
exports.getReadingCarousel = function (stream,callback) {
    getData(stream,apiURL.baseurl + apiURL.readingCarousel, callback);
};
exports.getReadingIndex = function (stream,index, callback) {
    getData(stream,apiURL.baseurl + apiURL.readingIndex + index, callback);
};
exports.getEssay = function (stream,id, callback) {
    getData(stream,apiURL.baseurl + apiURL.essay + id, callback);
};
exports.getSerialContent = function (stream,id, callback) {
    getData(stream,apiURL.baseurl + apiURL.serialcontent + id, callback);
};
exports.getQuestionDetail = function (stream,id, callback) {
    getData(stream,apiURL.baseurl + apiURL.question + id, callback);

};
exports.getCarouseList = function (stream,id, callback) {
    getData(stream,apiURL.baseurl + apiURL.carouselList + id, callback);
};
exports.getMovieList = function (stream,id, callback) {
    getData(stream,apiURL.baseurl + apiURL.movieList + id, callback);
};
exports.getMovieDetail = function (stream,id, callback) {
    getData(stream,apiURL.baseurl + apiURL.movieDetail + id, callback);

};
function hello(){
    console.log("hahhahahah")
}

exports.hello= hello