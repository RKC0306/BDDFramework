package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "C:\\Users\\RamaKrishna\\git\\BDDFramework\\com.Guru99.BD\\Features\\gurubankLoginWithExcel.feature"
 ,glue={"StepDefinitions2"}
 ,plugin = {"pretty","html:reports/test-report"}
 ,dryRun = false
 ,monochrome = true)
public class TestRunner2 {

}
