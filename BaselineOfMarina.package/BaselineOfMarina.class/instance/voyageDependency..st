accessing
voyageDependency: spec
	spec
		project: 'Voyage'
		with: [ 
			spec
				className: 'ConfigurationOfVoyageMongo';
				versionString: #stable;
				loads: #('Mongo');
				repository: 'http://smalltalkhub.com/mc/estebanlm/Voyage/main' ]