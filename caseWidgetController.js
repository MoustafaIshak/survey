({
	doInit: function(cmp) {
        var action = cmp.get("c.populateCaseWidget");
        action.setParams({
            "recoredId": cmp.get("v.recordId"),
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            var returnValue = response.getReturnValue();
            var spinner = cmp.find("loadingProgress");
            $A.util.toggleClass(spinner, "slds-hide");
               var state = response.getState();
            if (state === "SUCCESS") { 
                var costPerCalnedarMonthlabel=$A.get("$Label.c.costPerCalnedarMonth");
                var Other_Country_Atm_Fee_label=$A.get("$Label.c.Other_Country_Atm_Fee_is");
                var Card_Replacement_Cost_label=$A.get("$Label.c.Card_Replacement_Cost_is");
                var result = JSON.parse(response.getReturnValue());
                cmp.set("v.costPerCalnedarMonth",costPerCalnedarMonthlabel+ result.costPerCalnedarMonth);
            	cmp.set("v.otherCountryAtmFee", Other_Country_Atm_Fee_label +result.otherCountryAtmFee);
            	cmp.set("v.cardReplacementCost", Card_Replacement_Cost_label +result.cardReplacementCost);
            	
            }

        });
        console.log('test done');
        $A.enqueueAction(action);
    }
})