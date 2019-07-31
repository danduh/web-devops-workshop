aws cli
user with permissions 
EKS role 
How to create: https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html#create-service-role
https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html

Create security group:

aws eks create-cluster --name workshop --role-arn arn:aws:iam::411429114957:role/eksServiceRoleConsole --resources-vpc-config subnetIds=subnet-853d46ff,subnet-c4b689ac,subnet-fbb1b1b1,securityGroupIds=sg-0a28eead1247b7cb3,endpointPublicAccess=true,endpointPrivateAccess=true

