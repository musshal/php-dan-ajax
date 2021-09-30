// fungsi untuk membuat objek XMLHttpRequest
function getXMLHTTPRequest() {
  if (window.XMLHttpRequest) {
    // code for modern browsers
    return new XMLHttpRequest();
  } else {
    // code for old IE browsers
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
}

// fungsi untuk melakukan request ke get_server_time.php melalui ajax
function get_server_time() {
  const xmlHttp = getXMLHTTPRequest();
  const page = "get_server_time.php";

  xmlHttp.open("GET", page, true);
  xmlHttp.onreadystatechange = function () {
    document.getElementById("showTime").innerHTML = `
      <img src="./ajax_loader.png" alt="ajax_loader" / >`;

    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      document.getElementById("showTime").innerHTML = xmlHttp.responseText;
    }
  };

  xmlHttp.send(null);
}

function add_customer_get() {
  const xmlHttp = getXMLHTTPRequest();

  // get input value
  const name = encodeURI(document.getElementById("name").value);
  const address = encodeURI(document.getElementById("address").value);
  const city = encodeURI(document.getElementById("city").value);

  // validate
  if (name !== "" && address != "" && city != "") {
    // set url and inner
    const url =
      "add_customer_get.php?name=" +
      name +
      "&address=" +
      address +
      "&city=" +
      city;

    // alert(url);
    const inner = "add_response";

    // open request
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = function () {
      document.getElementById(inner).innerHTML = `
        <img src="./ajax_loader.png" alt="ajax_loader">`;

      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        document.getElementById(inner).innerHTML = xmlHttp.responseText;
      }

      return false;
    };

    xmlHttp.send(null);
  } else {
    alert("Please fill all the fields");
  }
}

function add_customer_post() {
  const xmlHttp = getXMLHTTPRequest();

  // get input value
  const name = encodeURI(document.getElementById("name").value);
  const address = encodeURI(document.getElementById("address").value);
  const city = encodeURI(document.getElementById("city").value);

  if (name != "" && address != "" && city != "") {
    // set url and inner
    const url = "add_customer_post.php";
    alert(url);
    const inner = "add_response";

    // set parameter and open request
    const params = "name=" + name + "&address=" + address + "&city=" + city;

    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    xmlHttp.onreadystatechange = function () {
      document.getElementById(inner).innerHTML = `
        <img src="./ajax_loader.png" alt="ajax_loader" />`;

      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        document.getElementById(inner).innerHTML = xmlHttp.responseText;
      }

      return false;
    };

    xmlHttp.send(params);
  } else {
    alert("Please fill all the fields");
  }
}

function callAjax(url, inner) {
  const xmlhttp = getXMLHTTPRequest();
  xmlhttp.open("GET", url, true);

  xmlhttp.onreadystatechange = function () {
    document.getElementById(inner).innerHTML = `
      <img src="./ajax_loader.png" alt="ajax_loader" />`;

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById(inner).innerHTML = xmlhttp.responseText;
    }

    return false;
  };

  xmlhttp.send(null);
}

function showCustomer(customerid) {
  const inner = "detail_customer";
  const url = "get_customer.php?id=" + customerid;

  if (customerid == "") {
    document.getElementById(inner).innerHTML = "";
  } else {
    callAjax(url, inner);
  }
}

function showBook(title) {
  const inner = "detail_book";
  const url = "get_book.php?book=" + title;

  if (title == "") {
    document.getElementById(inner).innerHTML = "";
  } else {
    callAjax(url, inner);
  }
}
