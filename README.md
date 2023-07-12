# F5-XC API Collection

Steps:
1. Spin up "[Agility 2022] F5XC Security" (version 1) UDF blueprint.
2. Go through tasks 1 and 2 and at least first 8 steps of task 3 in lab at https://clouddocs.f5.com/training/community/f5xc/html/class2/intro.html

The requests use the following URLs:
- List Load Balancers: https://{{hostname}}/api/config/namespaces/{{namespace}}/http_loadbalancers
- Create Load Balancer: https://{{hostname}}/api/config/namespaces/{{namespace}}/http_loadbalancers
- Query Security Events: https://{{hostname}}/api/data/namespaces/{{namespace}}/app_security/events

Include Authorization: "APIToken {{api-token}}" as a header in all request to authenticate.

Environment variables:
- api-token: {get from XC console}
- domain: lab-sec.f5demos.com
- hostname: f5-xc-lab-sec.console.ves.volterra.io
- namespace: {get from XC console}
- tenant: {get from XC console}
