# Emmanuel-Services Multicloud DevOps Lab

This repository demonstrates how to architect, deploy, and manage a real-world full-stack web application using modern DevOps tools and multicloud infrastructure. It includes:

- CI/CD with Jenkins
- Containerization with Docker
- Orchestration with Kubernetes
- Infrastructure as Code with Helm
- Multi-environment deployment on AWS, Azure, and GCP

---

## Project Structure
```
backend/
  app.js
  Dockerfile
  package.json

ci-cd/
  Jenkinsfile

frontend/
  Dockerfile
  package.json
  public/
    index.html

helm/
  Chart.yaml
  values.yaml
  templates/
    deployment.yaml
    service.yaml
    k8s-ingress.yaml

README.md
```

---

## Local Development Setup

### Prerequisites
- Docker & Docker Compose (or Node.js/NPM)

### Clone the Repository
```bash
git clone https://github.com/your-org/emmanuel-services-multicloud-devops-lab.git
cd emmanuel-services-multicloud-devops-lab
```

### Run Manually
```bash
# Backend
cd backend
npm install
npm start

# Frontend (in a separate terminal)
cd frontend
npm install
npm start
```

- Frontend available at: `http://localhost:3000`
- Backend API: `http://localhost:8000`

---

## CI/CD with Jenkins

Jenkins pipeline is defined in `ci-cd/Jenkinsfile` and includes:
- Code checkout
- Build & test for both frontend and backend
- Helm-based deployment to Kubernetes clusters in AWS, Azure, and GCP

---

## Production Deployment

### Prerequisites
- Kubernetes Cluster (EKS, AKS, or GKE)
- Helm & kubectl CLI tools installed

### Deploy with Helm
```bash
helm upgrade --install emmanuel-services ./helm --namespace production --create-namespace
```

### Customize Your Deployment
- Modify values in `helm/values.yaml`
- Add secrets using `templates/secrets.yaml`
- Configure ingress through `templates/k8s-ingress.yaml`

---

## Cleanup
```bash
# Stop Docker containers (if applicable)
docker-compose down

# Remove Helm release
helm uninstall emmanuel-services --namespace production
```

---

## License

MIT License  
© 2025 Emmanuel Naweji

---

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

