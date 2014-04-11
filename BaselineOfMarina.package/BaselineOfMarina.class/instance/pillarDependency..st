accessing
pillarDependency: spec
	spec
		project: 'Pillar'
		with: [ 
			spec
				className: 'ConfigurationOfPillar';
				versionString: #stable;
				loads: #('html exporter' 'text exporter');
				repository: 'http://smalltalkhub.com/mc/Pier/Pillar/main/' ]