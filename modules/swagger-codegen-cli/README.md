## How to run the last version?
* Go to the parent repo folder
  * Reason: 🧠 We use the latest version of 'io.swagger:swagger-codegen:2.4.42-SNAPSHOT' 🧠
* `mvn [options] [<goal(s)>] [<phase(s)>]`
  * _Example:_ `mvn clean package`

## Examples
### Example1: generate a PHP client for https://petstore.swagger.io/v2/swagger.json
* Get the swagger-codegen-cli.jar
  * At parent repo folder of this repo --> Clone it
    * `mvn clean package`
      * Check the .jar created in 'modules/swagger-codegen-cli/target/swagger-codegen-cli.jar'
  * Download the JAR directly from [maven.org](https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.41/swagger-codegen-cli-2.4.41.jar)
* Depending on OS
  * in MacOs / Linux
      ```
          java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate \
             -i https://petstore.swagger.io/v2/swagger.json \
             -l php \
             -o /var/tmp/php_api_client
      ```
  * in Windows
     ```
          java -jar modules\swagger-codegen-cli\target\swagger-codegen-cli.jar generate \
             -i https://petstore.swagger.io/v2/swagger.json \
             -l php \
             -o c:\temp\php_api_client
     ```
* Check how the PHP client is generated in
  * MacOs / Linux - '/var/tmp/php_api_client' -
  * Windows - 'c:\temp\php_api_client' - 
* Notes
  * `java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar help generate`
    * check the available options
  * `java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar config-help -l php`
    * check the available PHP options