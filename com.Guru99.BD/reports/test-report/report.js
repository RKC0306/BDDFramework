$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RamaKrishna/git/BDDFramework/com.Guru99.BD/Features/gurubankLoginWithExcel.feature");
formatter.feature({
  "line": 1,
  "name": "Guru bank smoke scenarios",
  "description": "",
  "id": "guru-bank-smoke-scenarios",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login to GuruBank",
  "description": "",
  "id": "guru-bank-smoke-scenarios;login-to-gurubank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Gurubank LOgin page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title is GuruBank",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enetr usename and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clickis login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on new customer link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user landed on add new customer page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user creating new customers with the input data present at \"./TestData/GuruBankCustomerDetails.xlsx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginGuruBankWithExcel.gurubank_LOgin_page()"
});
formatter.result({
  "duration": 7982948278,
  "status": "passed"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.title_is_GuruBank()"
});
formatter.result({
  "duration": 125216876,
  "status": "passed"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_enetr_usename_and_password()"
});
formatter.result({
  "duration": 244025353,
  "status": "passed"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_clickis_login_button()"
});
formatter.result({
  "duration": 2001445133,
  "status": "passed"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_click_on_new_customer_link()"
});
formatter.result({
  "duration": 1088911858,
  "status": "passed"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_landed_on_add_new_customer_page()"
});
formatter.result({
  "duration": 42849691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "./TestData/GuruBankCustomerDetails.xlsx",
      "offset": 60
    }
  ],
  "location": "LoginGuruBankWithExcel.user_creating_new_customers_with_the_input_data_present_at(String)"
});
formatter.result({
  "duration": 2789495262,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : please fill all fields}\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAMAKRISHNA-PC\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\RAMAKR~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: b69cae66e4998247d06115c810f3cd19\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[3]/div/ul/li[2]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions2.LoginGuruBankWithExcel.user_creating_new_customers_with_the_input_data_present_at(LoginGuruBankWithExcel.java:111)\r\n\tat ✽.Then user creating new customers with the input data present at \"./TestData/GuruBankCustomerDetails.xlsx\"(C:/Users/RamaKrishna/git/BDDFramework/com.Guru99.BD/Features/gurubankLoginWithExcel.feature:9)\r\n",
  "status": "failed"
});
});