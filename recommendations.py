from collections import Counter
from itertools import islice

def get_club_recommendations(person, people_clubs):
    # Find the people that the person is already part of a club with
    num = 0
    attended = []
    for c in people_clubs.items():
        if person in c: 
            num += 1 
            attended.append(c)
    
    # For each element in attended we find a club that has the most overlap with the current club
    recommended = {}
    for c in attended:
        people = {}
        for p in c:
            people.add(p)
        max = 0
        cb = ""
        for oc in people_clubs.items():
            if oc != c:
                res = 0;
                for pl in oc:
                    if pl in people: res += 1
                res /= (len(oc) + len(c))
                
                if res > max:
                    max = res 
                    cb = oc

        recommended.add(cb)
    # Depends on how many recommendations we want to have, we can have multiple layers of recommendations
    return recommended

def get_club_interests(person, attended, people_clubs):

    ppl = {"person": 0}
    for c in attended:
        for p in c:
            ppl[p] += 1/len(c)
    res_ppl = take(10, sorted(ppl.items(), key=lambda x: x[1], reverse=True).items())
    all_clubs = []
    for pl in res_ppl:
        # could've done better if pre-processed the people-clubs array
        for c in people_clubs:
            if c.member(pl):
                for opl in res_ppl:
                    if c.member(opl):
                        all_clubs[c] += 1
    res = take(10, sorted(all_clubs.items(), key=lambda x: x[1], reverse=False).items())
    # return the 10 clubs that have the least interests in other important members
    return res

