Feature: Test that the giraffe’s head does not explode because of high blood pressure 

Scenario: Test that giraffe when its neck is ground level over 1 secounds
Given Giraffe is standing 
When Its neck is down to drink at ground level for 1 secounds
Then blood supply is below 300/180

Scenario: Test that giraffe when its neck is ground level below 25 secounds
Given Giraffe is standing 
When Its neck is down to drink at ground level for 25 secounds
Then blood supply is below 300/180

Scenario: Test that giraffe when its neck is ground level over 25 secounds
Given Giraffe is standing 
When Its neck is down to drink at ground level over 25 secounds
Then blood supply is over 300/180



