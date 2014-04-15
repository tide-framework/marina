adding/removing
remove
	super remove.
	self reference ensureDelete.
	self reference parent ensureDelete