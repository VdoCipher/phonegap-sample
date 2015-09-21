all:
	phonegap plugin remove cordova-plugin-vdocipher
	phonegap plugin add ../customPlugin/
	phonegap run android
