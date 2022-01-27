docker build -t warehouse:1.0 .  &&
docker tag warehouse:1.0  default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/warehouse:1.0  &&
docker push default-route-openshift-image-registry.apps.ocp.lab.cloudpak.site/labproj23/warehouse:1.0
