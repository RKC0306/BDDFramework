$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Work/eclipse-workspace/com.Guru99.BD/Features/gurubankLoginWithExcel.feature");
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
  "name": "user creating new customers with the input data present at \"C:\\Work\\eclipse-workspace\\com.Guru99.BD\\GuruBankCustomerDetails.xlsx\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginGuruBankWithExcel.gurubank_LOgin_page()"
});
formatter.result({
  "duration": 9872332866,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created exception\nfrom chrome not reachable\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.84 seconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAMAKRISHNA-PC\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002710.0.1\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat StepDefinitions2.LoginGuruBankWithExcel.gurubank_LOgin_page(LoginGuruBankWithExcel.java:24)\r\n\tat ✽.Given Gurubank LOgin page(C:/Work/eclipse-workspace/com.Guru99.BD/Features/gurubankLoginWithExcel.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.title_is_GuruBank()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_enetr_usename_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_clickis_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_click_on_new_customer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginGuruBankWithExcel.user_landed_on_add_new_customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "C:\\Work\\eclipse-workspace\\com.Guru99.BD\\GuruBankCustomerDetails.xlsx",
      "offset": 60
    }
  ],
  "location": "LoginGuruBankWithExcel.user_creating_new_customers_with_the_input_data_present_at(String)"
});
formatter.result({
  "status": "skipped"
});
});