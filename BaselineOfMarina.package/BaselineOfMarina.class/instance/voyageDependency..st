accessing
voyageDependency: spec
	spec
		project: 'Voyage'
		with: [ 
			spec
				className: 'ConfigurationOfVoyageMongo';
				versionString: #stable;
				loads: #('Mongo' 'Memory' "the dependency on Memory is only for tests");
				repository: 'http://smalltalkhub.com/mc/estebanlm/Voyage/main' ]