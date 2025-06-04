# Emmanuel-Services DevOps Lab Project

This guide is tailored for beginners and non-technical team members to help understand how to deploy and manage a web application using DevOps best practices across AWS, Azure, and GCP. The Emmanuel-Services app uses Node.js (backend) and React (frontend).

---

## Project Overview

- **Languages**: Node.js, React
- **CI/CD Tools**: GitHub Actions, Azure DevOps
- **Version Control**: Git, GitHub, SVN
- **IaC Tools**: Terraform, Ansible
- **Containerization & Orchestration**: Docker, Kubernetes (EKS, AKS, GKE)
- **Multi-Cloud**: AWS, Azure, GCP

---

## Step-by-Step Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Here2ServeU/emmanuel-services-devops-lab.git
cd emmanuel-services-devops-lab
```

### 2. Review the Codebase
Explore:
- `/frontend`: React app
- `/backend`: Node.js app

### 3. Set Up GitHub Actions
- Go to the `.github/workflows` directory.
- Review `ci.yml` and `cd.yml`.
- These handle build, test, and deploy steps.

### 4. Azure DevOps CI/CD Setup
- Navigate to Azure DevOps > Pipelines > New Pipeline.
- Connect your GitHub repo.
- Use the included `azure-pipelines.yml` file.

### 5. Containerization with Docker
```bash
docker build -t emmanuel-frontend ./frontend
docker build -t emmanuel-backend ./backend
```

### 6. Kubernetes Deployment
Deploy to:
- AWS (EKS)
- Azure (AKS)
- GCP (GKE)

Use `kubectl apply -f k8s/` for manifests.

### 7. Infrastructure as Code
- Use `terraform/` folder for IaC.
```bash
cd terraform/aws
terraform init
terraform apply
```

- Repeat for `azure` and `gcp` folders.

### 8. Configuration Management with Ansible
```bash
ansible-playbook -i inventory site.yml
```

### 9. Security Practices
- Enable branch protection on GitHub
- Use `.env` and GitHub Secrets
- Rotate credentials regularly

---

## Cleanup
```bash
terraform destroy
docker system prune -a
```

---

## Support
If stuck, contact the DevOps team via Slack or email.


---

## License

MIT License  
© 2025 Emmanuel Naweji

![AWS Certified](https://img.shields.io/badge/AWS-Certified-blue?logo=amazonaws)
![Azure Solutions Architect](https://img.shields.io/badge/Azure-Solutions%20Architect-0078D4?logo=microsoftazure)
![CKA](https://img.shields.io/badge/Kubernetes-CKA-blue?logo=kubernetes)
![Terraform](https://img.shields.io/badge/IaC-Terraform-623CE4?logo=terraform)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-blue?logo=githubactions)
![GitLab CI](https://img.shields.io/badge/CI/CD-GitLab%20CI-FC6D26?logo=gitlab)
![Jenkins](https://img.shields.io/badge/CI/CD-Jenkins-D24939?logo=jenkins)
![Ansible](https://img.shields.io/badge/Automation-Ansible-red?logo=ansible)
![ArgoCD](https://img.shields.io/badge/GitOps-ArgoCD-orange?logo=argo)
![VMware](https://img.shields.io/badge/Virtualization-VMware-607078?logo=vmware)
![Linux](https://img.shields.io/badge/OS-Linux-black?logo=linux)
![FinOps](https://img.shields.io/badge/FinOps-Cost%20Optimization-green?logo=money)
![OpenAI](https://img.shields.io/badge/AI-OpenAI-ff9900?logo=openai)
