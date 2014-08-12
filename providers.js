var providers = {
	'amazon-ses': {
		'id': 'amazon-ses',
		'name': 'Amazon SES',
		'url': 'http://aws.amazon.com/ses',
		'test': function(email) {
			return (/^X-SES-Outgoing:/m).test(email)
		}
	},
	'bronto': {
		'id': 'bronto',
		'name': 'Bronto',
		'url': 'http://bronto.com',
		'test': function(email) {
			return (/d=bronto.com;/).test(email)
		}
	},
	'constant-contact': {
		'id': 'constant-contact',
		'name': 'Constant Contact',
		'url': 'http://www.constantcontact.com',
		'test': function(email) {
			return (/^X-Roving-ID:/m).test(email)
		}
	},
	'dyn': {
		'id': 'dyn',
		'name': 'Dyn',
		'url': 'http://dyn.com/message-management',
		'test': function(email) {
			return (/^X-DynectEmail-Msg-(Key|Hash):/m).test(email)
		}
	},
	'eloqua': {
		'id': 'eloqua',
		'name': 'Eloqua',
		'url': 'http://www.eloqua.com',
		'test': function(email) {
			return (/^X-elqPod:/m).test(email)
		}
	},
	'emailvision': {
		'id': 'emailvision',
		'name': 'Email Vision',
		'url': 'https://www.emailvision.com',
		'test': function(email) {
			return (/^X-EMV-MemberId:/m).test(email)
		}
	},
	'emma': {
		'id': 'emma',
		'name': 'Emma',
		'url': 'https://myemma.com',
		'test': function(email) {
			return (/d=e2ma\.net;\/m/).test(email)
		}
	},
	'exacttarget': {
		'id': 'exacttarget',
		'name': 'Exact Target',
		'url': 'http://www.exacttarget.com',
		'test': function(email) {
			return ((/^x-job: \d{3,}_\d{3,}$/m).test(email) && (/mta[\d]*\.[\w-\.]+\.[a-z]{2,}/i).test(email))
		}
	},
	'fishbowl': {
		'id': 'fishbowl',
		'name': 'Fishbowl',
		'url': 'https://www.fishbowl.com',
		'test': function(email) {
			return (/^X-Mailer: Fishbowl/m).test(email)
		}
	},
	'gold-lasso': {
		'id': 'gold-lasso',
		'name': 'Gold Lasso',
		'url': 'https://www.goldlasso.com',
		'test': function(email) {
			return (/^X-Mailer: Eloop Mailer/m).test(email)
		}
	},
	'google-app-engine': {
		'id': 'google-app-engine',
		'name': 'Google App Engine',
		'url': 'https://developers.google.com/appengine/docs/python/mail/sendingmail',
		'test': function(email) {
			return (/^X-Google-Appengine-App-Id:/m).test(email)
		}
	},
	'icontact': {
		'id': 'icontact',
		'name': 'iContact',
		'url': 'https://www.icontact.com',
		'test': function(email) {
			return (/^X-ICPINFO:/m).test(email)
		}
	},
	'listrak': {
		'id': 'listrak',
		'name': 'Listrack',
		'url': 'https://www.listrak.com',
		'test': function(email) {
			return (/^Received: from [\w-]+\\.listrak\.com/m).test(email)
		}
	},
	'locaweb': {
		'id': 'locaweb',
		'name': 'Locaweb',
		'url': 'https://www.locaweb.com.br',
		'test': function(email) {
			return (/^x-locaweb-id:/m).test(email)
		}
	},
	'mailchimp': {
		'id': 'mailchimp',
		'name': 'Mailchimp',
		'url': 'https://mailchimp.com',
		'test': function(email) {
			return (/^X-MC-User:/m).test(email)
		}
	},
	'mailerlite': {
		'id': 'mailerlite',
		'name': 'MailerLite',
		'url': 'https://www.mailerlite.com',
		'test': function(email) {
			return (/d=ml.mailersend.com;/).test(email)
		}
	},
	'mailgun': {
		'id': 'mailgun',
		'name': 'Mailgun',
		'url': 'https://www.mailgun.com',
		'test': function(email) {
			return (/^X-Mailgun-Sid:/m).test(email)
		}
	},
	'mailigen': {
		'id': 'mailgen',
		'name': 'MailiGen',
		'url': 'http://www.mailigen.com',
		'test': function(email) {
			return (/^X-Mailer: MailiGen/m).test(email)
		}
	},
	'mailjet': {
		'id': 'mailjet',
		'name': 'Mailjet',
		'url': 'https://www.mailjet.com',
		'test': function(email) {
			return (/s=mailjet;/).test(email)
		}
	},
	'mandrill': {
		'id': 'mandrill',
		'name': 'Mandrill',
		'url': 'https://mandrillapp.com',
		'test': function(email) {
			return (/^X-Mandrill-User:/m).test(email)
		}
	},
	'marketo': {
		'id': 'marketo',
		'name': 'Marketo',
		'url': 'https://www.marketo.com',
		'test': function(email) {
			return (/^X-MarketoID:/m).test(email)
		}
	},
	'messagebus': {
		'id': 'messagebus',
		'name': 'Message Bus',
		'url': 'https://messagebus.com',
		'test': function(email) {
			return (/^X-Messagebus-Info:/m).test(email)
		}
	},
	'postmark': {
		'id': 'postmark',
		'name': 'Postmark',
		'url': 'https://postmarkapp.com',
		'test': function(email) {
			return (/^X-PM-Message-Id:/m).test(email)
		}
	},
	'responsys': {
		'id': 'responsys',
		'name': 'Responsys',
		'pattern': 'https://www.responsys.com',
		'test': function(email) {
			return (/^X-rext:/m).test(email)
		}
	},
	'sailthru': {
		'id': 'sailthru',
		'name': 'Sailthru',
		'url': 'https://www.sailthru.com',
		'test': function(email) {
			return (/^X-Mailer: sailthru.com$/m).test(email)
		}
	},
	'salesforce': {
		'id': 'salesforce',
		'name': 'Salesforce',
		'url': 'https://www.salesforce.com',
		'test': function(email) {
			return (/^X-SFDC-User:/m).test(email)
		}
	},
	'sendgrid': {
		'id': 'sendgrid',
		'name': 'SendGrid',
		'url': 'https://sendgrid.com',
		'test': function(email) {
			return (/^X-(SG|SENDGRID)-EID:/m).test(email)
		}
	},
	'silverpop': {
		'id': 'silverpop',
		'name': 'Silverpop',
		'url': 'https://www.silverpop.com',
		'test': function(email) {
			return (/^Received: from [\w\.]+\.mkt\d{3,}\.com/m).test(email)
		}
	},
	'smtp': {
		'id': 'smtp',
		'name': 'SMTP.com',
		'url': 'https://smtp.com',
		'test': function(email) {
			return (/^X-SMTPCOM-Tracking-Number:/m).test(email)
		}
	},
	'yesmail': {
		'id': 'yesmail',
		'name': 'Yesmail',
		'url': 'https://www.yesmail.com',
		'test': function(email) {
			return ((/s=yesmail.?;/).test(email) || (/^Received: from [\w\.\-]+postdirect.com/m).test(email))
		}
	}
}