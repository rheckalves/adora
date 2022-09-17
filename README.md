# Adora (Automatic DORA Metrics tool)
#
[![Deploy to ECR](https://github.com/produtoreativo/adora/actions/workflows/deploy.yaml/badge.svg?branch=master)](https://github.com/produtoreativo/adora/actions/workflows/deploy.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b2ac8594e7f040eb81bb4031e147c53a)](https://www.codacy.com/gh/joao-felipe-santoro/adora/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=joao-felipe-santoro/adora&amp;utm_campaign=Badge_Grade)

[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/b2ac8594e7f040eb81bb4031e147c53a)](https://www.codacy.com/gh/joao-felipe-santoro/adora/dashboard?utm_source=github.com&utm_medium=referral&utm_content=joao-felipe-santoro/adora&utm_campaign=Badge_Coverage)

> So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.
>
> [2 Coríntios 4:18](https://www.bibliaonline.com.br/niv/2co/4/18)

```shell
docker build -t adora .
docker run --rm -d -p 3100:3100 adora
docker rm $(docker stop $(docker ps -a -q --filter ancestor=adora --format="{{.ID}}"))
```

```shell
docker pull 467588053624.dkr.ecr.us-east-2.amazonaws.com/adora:b6d40f9ea33da5beb1b72f2461ac58cdfe146570
```

```shell
docker run --rm -d -p 3100:3100 --name adora 467588053624.dkr.ecr.us-east-2.amazonaws.com/adora:b6d40f9ea33da5beb1b72f2461ac58cdfe146570
```

<https://linearb.io/blog/cycle-time-measuring-and-improving-team-process/>

```shell
docker run --rm -d -p 3100:3100 --name adora 467588053624.dkr.ecr.us-east-2.amazonaws.com/adora:addf4f6b5f61865da02c8d78d9452c0b6d7d907a
```

Branch created <https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#create>

Pull Request Opened <https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request>

Merge to master <https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push>

```json
{
  "event": "create",
  "repository": "produtoreativo/payments",
  "commit": "9e733d2e2f4e6780e3b434573e2e35f132de6913",
  "ref": "refs/heads/feat(104)",
  "head": "",
  "workflow": "Branch Created",
  "data": {
    "ref": "feat(104)",
    "eventType": "START_CYCLE",
    "name": "Coding Time"
  },
  "requestID": "2be41f26-cad0-4fff-8914-44c2cfa47504"
}
```

9e733d2e2f4e6780e3b434573e2e35f132de6913

---
## Spin up dockerized postgres

```bash
# Run docker compose detached
$ docker-compose -f docker/db/local.yml up -d

# Execute migrations to create the inicial structure
$ yarn m:run

# Stop docker compose
$ docker-compose -f docker/db/local.yml down
```

## Connecting into the local db

- user: localuser
- pwd: localpwd
- database: adora
- schema: adora
