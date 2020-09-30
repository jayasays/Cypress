Feature: Giraffe Test that giraffe has enough blood supply to its brain to function normally 

Scenario: Test that giraffe when its neck is upright.
Given Giraffe is standing 
When Its neck is upright
Then blood supply is below 300/180

Scenario: Test that giraffe when its neck is upleft.
Given Giraffe is standing 
When Its neck is upleft
Then blood supply is below 300/180

Scenario: Test that giraffe when its neck is upleft.
Given Giraffe is standing 
When Its neck is down
Then blood supply is over 300/180



