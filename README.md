# ShopApp

docker images
docker tag postgres:14.1 default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/postgres-wallet:1.0
docker images | grep wallet*
docker login -u $(oc whoami) -p $(oc whoami -t) https://default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/
docker push default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/postgres-wallet
docker push default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/postgres-wallet:1.0


udostępniamy frontend za pomocą expose svc.



docker images


docker tag walletapp:1.0 default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/walletapp:1.0



docker push default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/walletapp:1.0

docker push default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/postgres-wallet:1.0




docker tag walletapp:3.0 default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/walletapp:3.0

docker push default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/walletapp:3.0


db-svc.labproj23.svc.cluster.local:5432

kubectl exec -it bb-deploy -- sh



oc expose svc projektappsvc --name projekt
projekt-costam/apps.ocp.lab.cloudpak.site/labproj23/


dbdeployment-5856789f6f-t6265



kkubectl exec -it dbdeployment-5856789f6f-t6265 -- psql -U postgres -d MonthWallet


--------------------POSTGRES-------------------------
\dt
\l+

