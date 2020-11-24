# Batch Explorer

## Deployment

The Hermez Batch Explorer is deployed to an AWS EC2 instance using AWS ECS. A new version will be deployed automatically thanks to the `aws` GitHub action on each release. The full deployment process is:

1. Create a new release.
2. A `.env` for the production environment will be created. Values will be read from GitHub `secrets`.
3. Two new docker images for the release will be created and pushed to Docker Hub.
   1. `hermeznet/batch-explorer:${{tag_name}}`: Useful to mantain a release history just in case we need to rollback to a specific release.
   2. `hermeznet/batch-explorer:latest`: Image which is going to be deployed to AWS.
4. AWS ECS will be updated using the `ecs-task-definition.json` Task Definition which is going to pull the new Docker image on the EC2 instance.
