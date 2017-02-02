#!env/bin/python3

import settings
from facebookads.api import FacebookAdsApi
from facebookads import objects

FacebookAdsApi.init(settings.APP_ID, settings.APP_SECRET, settings.ACCESS_TOKEN)
me = objects.AdUser(settings.AD_USER)

def get_accounts():
    def decorate(x):
        return {
            "id": x["id"],
            "name": x["name"]
        }
    return [decorate(x) for x in me.get_ad_accounts(["id", "name"])]

def get_campaigns(account_id):
    fields = ["id","name","objective","start_time","stop_time","status"]
    def decorate(x):
        return { k: x.get(k) for k in fields }

    account = objects.AdAccount(account_id)
    return [decorate(x) for x in account.get_campaigns(fields)]

def get_campaign_insights(campaign_id):
    account = objects.Campaign(campaign_id)
    fields=[
            objects.Insights.Field.ad_id,
            objects.Insights.Field.unique_clicks,
            objects.Insights.Field.impressions,
    ]
    return list(account.get_insights(params={
            'date_preset': objects.Insights.Preset.last_7_days,
    }))

def create_campaign(account_id, name, objective, status):
    account = objects.AdAccount(account_id)

    campaign = objects.Campaign(parent_id = account.get_id_assured())
    campaign[objects.Campaign.Field.name]=name
    campaign[objects.Campaign.Field.objective]=objective
    campaign[objects.Campaign.Field.configured_status]=status

    print(campaign.remote_create())

def test():
    accounts = get_accounts()
    account=accounts[0]["id"]
    #create_campaign(account, "test", "LINK_CLICKS", "PAUSED")
    print(accounts)
    campaigns=get_campaigns(account)
    print(campaigns)
    insights=get_campaign_insights(campaigns[0]["id"])
    print(insights)

if __name__=='__main__':
    test()
