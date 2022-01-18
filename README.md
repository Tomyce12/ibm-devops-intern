# ibm-devops-intern
IBM DevOps Intern Task

# Ansible
## Requirements

The below requirements are needed on the host that executes this module.

    python >= 3.6

    boto3 >= 1.15.0

    botocore >= 1.18.0
## Run command
ansible-playbook main.yml --private-key <PATH_TO_PRIVATE_KEY>

## Key Pair
Go to EC2 menu and create a key-pair. Save the .pem file as it will be used to access your created EC2 instance. 
Note the name of the key-pair you've created as it is used in the playbook. 
Set permissions to 600 for the private key file. 
Make sure that subnet has appropriate inbound rules for SSH. 
(select the EC3 instance. Select _security_ tab, click on _security groups_, edit _inbound rules_ add a inbound rule for _SSH_ type).

## Playbook 
The playbook creates a EC2 instance and installes redis on it. 
The second part is dependant on the EC2 creation as it returns the IP address of newly created VM for redis installation (2nd part)