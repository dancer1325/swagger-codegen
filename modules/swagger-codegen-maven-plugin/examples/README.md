## How to run?
* `mvn generate`
  * Problems
    * Problem1:  there is no POM in this directory
      * Solution: Paste the 'java-client.xml' to 'pom.xml'
    * Problem2: " Unknown lifecycle phase "generate"
      * Solution: `mvn io.swagger:swagger-codegen-maven-plugin:2.3.1:generate`
    * Problem3: The parameters 'inputSpec', 'language' are missing or invalid
      * Attempt1: `<inputSpec>.swagger.yaml</inputSpec>`
      * Solution: TODO: